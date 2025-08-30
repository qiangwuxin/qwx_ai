import {
  ref,
  onMounted,
  onUnmounted  // 关键修正：m 小写
} from 'vue';

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  const updateMousePosition = (event) => {
    x.value = event.clientX;
    y.value = event.clientY;
  };

  onMounted(() => {
    console.log('组件挂载了');
    window.addEventListener('mousemove', updateMousePosition);
  });
  
  // 这里也要同步修正
  onUnmounted(() => {
    console.log('组件卸载了');
    console.log('useMouse：事件监听已移除（组件卸载）'); 
    window.removeEventListener('mousemove', updateMousePosition);
  });

  return {
    x,
    y
  };
}
