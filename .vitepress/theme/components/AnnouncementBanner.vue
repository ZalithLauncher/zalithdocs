<template>
  <div v-if="showAnnouncement" class="announcement-popup">
    <div class="announcement-content">
      <div class="announcement-header">
        <span class="announcement-icon">⚠️</span>
        <span class="announcement-text">
          <strong>重要公告：</strong>Discord 服务器已停止运营。
        </span>
      </div>
      <div class="announcement-footer">
        <a href="/docs/announcement/discord-shutdown" class="announcement-link">查看详情 →</a>
        <button @click="dismiss" class="dismiss-btn" aria-label="关闭公告">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showAnnouncement = ref(true)

onMounted(() => {
  const dismissed = localStorage.getItem('announcement-dismissed')
  if (dismissed === 'true') {
    showAnnouncement.value = false
  }
})

const dismiss = () => {
  showAnnouncement.value = false
  localStorage.setItem('announcement-dismissed', 'true')
}
</script>

<style scoped>
.announcement-popup {
  position: fixed;
  top: 80px;
  left: 20px;
  max-width: 350px;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
  padding: 1rem 1.25rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 0 0 1px var(--vp-c-border);
  z-index: 1000;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.announcement-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.announcement-header {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.announcement-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.announcement-text {
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.announcement-text strong {
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-right: 0.25rem;
}

.announcement-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.announcement-link {
  color: var(--vp-c-indigo-1);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.8rem;
  white-space: nowrap;
  transition: opacity 0.2s;
}

.announcement-link:hover {
  opacity: 0.7;
  text-decoration: underline;
}

.dismiss-btn {
  background: transparent;
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-3);
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s;
  flex-shrink: 0;
}

.dismiss-btn:hover {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

@media (max-width: 768px) {
  .announcement-popup {
    top: 70px;
    left: 10px;
    right: 10px;
    max-width: calc(100% - 20px);
  }
}
</style>
