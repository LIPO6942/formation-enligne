// Modern Toast Notification System

class NotificationManager {
    constructor() {
        this.container = null;
        this.notifications = [];
        this.init();
    }

    init() {
        // Create notification container if it doesn't exist
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = 'toast-container';
            this.container.className = 'toast-container';
            document.body.appendChild(this.container);
        }
    }

    show(message, type = 'info', duration = 4000) {
        const id = Date.now() + Math.random();
        const toast = this.createToast(message, type, id);

        this.container.appendChild(toast);
        this.notifications.push({ id, element: toast });

        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 10);

        // Auto-remove after duration
        if (duration > 0) {
            setTimeout(() => this.remove(id), duration);
        }

        return id;
    }

    createToast(message, type, id) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.dataset.id = id;

        const icon = this.getIcon(type);
        const closeBtn = document.createElement('button');
        closeBtn.className = 'toast-close';
        closeBtn.innerHTML = '×';
        closeBtn.onclick = () => this.remove(id);

        toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-message">${message}</div>
        `;
        toast.appendChild(closeBtn);

        return toast;
    }

    getIcon(type) {
        const icons = {
            'success': '✓',
            'error': '✕',
            'warning': '⚠',
            'info': 'ℹ'
        };
        return icons[type] || icons.info;
    }

    remove(id) {
        const notification = this.notifications.find(n => n.id === id);
        if (notification) {
            notification.element.classList.remove('show');
            setTimeout(() => {
                if (notification.element.parentNode) {
                    notification.element.remove();
                }
                this.notifications = this.notifications.filter(n => n.id !== id);
            }, 300);
        }
    }

    success(message, duration = 4000) {
        return this.show(message, 'success', duration);
    }

    error(message, duration = 4000) {
        return this.show(message, 'error', duration);
    }

    warning(message, duration = 4000) {
        return this.show(message, 'warning', duration);
    }

    info(message, duration = 4000) {
        return this.show(message, 'info', duration);
    }

    clear() {
        this.notifications.forEach(n => this.remove(n.id));
    }
}

// Global instance
const toast = new NotificationManager();

// Modal System
class ModalManager {
    constructor() {
        this.activeModal = null;
    }

    show(content, options = {}) {
        // Remove existing modal if any
        this.close();

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-container ${options.size || 'medium'}">
                <div class="modal-header">
                    <h2 class="modal-title">${options.title || ''}</h2>
                    <button class="modal-close" onclick="modal.close()">×</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                ${options.footer ? `<div class="modal-footer">${options.footer}</div>` : ''}
            </div>
        `;

        document.body.appendChild(modal);
        this.activeModal = modal;

        // Trigger animation
        setTimeout(() => modal.classList.add('show'), 10);

        // Close on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal && !options.persistent) {
                this.close();
            }
        });

        // Close on Escape key
        const escHandler = (e) => {
            if (e.key === 'Escape' && !options.persistent) {
                this.close();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);

        return modal;
    }

    close() {
        if (this.activeModal) {
            this.activeModal.classList.remove('show');
            setTimeout(() => {
                if (this.activeModal && this.activeModal.parentNode) {
                    this.activeModal.remove();
                }
                this.activeModal = null;
            }, 300);
        }
    }

    confirm(message, options = {}) {
        return new Promise((resolve) => {
            const content = `
                <p style="margin: 0; font-size: 16px; line-height: 1.6; color: var(--color-text-secondary);">
                    ${message}
                </p>
            `;

            const footer = `
                <button class="btn btn-secondary" onclick="modal.handleConfirm(false)">
                    ${options.cancelText || 'Annuler'}
                </button>
                <button class="btn btn-primary" onclick="modal.handleConfirm(true)">
                    ${options.confirmText || 'Confirmer'}
                </button>
            `;

            this.confirmResolver = resolve;
            this.show(content, {
                title: options.title || 'Confirmation',
                footer: footer,
                size: 'small',
                persistent: true
            });
        });
    }

    handleConfirm(result) {
        if (this.confirmResolver) {
            this.confirmResolver(result);
            this.confirmResolver = null;
        }
        this.close();
    }

    alert(message, options = {}) {
        const content = `
            <p style="margin: 0; font-size: 16px; line-height: 1.6; color: var(--color-text-secondary);">
                ${message}
            </p>
        `;

        const footer = `
            <button class="btn btn-primary" onclick="modal.close()">
                ${options.buttonText || 'OK'}
            </button>
        `;

        this.show(content, {
            title: options.title || 'Information',
            footer: footer,
            size: 'small'
        });
    }
}

// Global instance
const modal = new ModalManager();

// Loading Indicator
class LoadingIndicator {
    constructor() {
        this.overlay = null;
    }

    show(message = 'Chargement...') {
        this.hide(); // Remove existing if any

        this.overlay = document.createElement('div');
        this.overlay.className = 'loading-overlay';
        this.overlay.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner"></div>
                <p class="loading-message">${message}</p>
            </div>
        `;

        document.body.appendChild(this.overlay);
        setTimeout(() => this.overlay.classList.add('show'), 10);
    }

    hide() {
        if (this.overlay) {
            this.overlay.classList.remove('show');
            setTimeout(() => {
                if (this.overlay && this.overlay.parentNode) {
                    this.overlay.remove();
                }
                this.overlay = null;
            }, 300);
        }
    }

    async wrap(promise, message = 'Chargement...') {
        this.show(message);
        try {
            const result = await promise;
            this.hide();
            return result;
        } catch (error) {
            this.hide();
            throw error;
        }
    }
}

// Global instance
const loading = new LoadingIndicator();

// Progress Indicator for async operations
function showProgress(element, percentage) {
    if (!element) return;

    let progressBar = element.querySelector('.inline-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'inline-progress';
        progressBar.innerHTML = '<div class="inline-progress-fill"></div>';
        element.appendChild(progressBar);
    }

    const fill = progressBar.querySelector('.inline-progress-fill');
    fill.style.width = `${percentage}%`;

    if (percentage >= 100) {
        setTimeout(() => {
            progressBar.remove();
        }, 500);
    }
}

// Confirmation dialogs with custom styling
function confirmAction(message, onConfirm, options = {}) {
    modal.confirm(message, options).then(result => {
        if (result && onConfirm) {
            onConfirm();
        }
    });
}

// Success notification with confetti effect (optional)
function celebrateSuccess(message) {
    toast.success(message, 5000);
    // Could add confetti animation here
}
