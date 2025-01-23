<script setup lang="tsx">
defineOptions({
  name: 'GlobalFooter',
});
</script>

<template>
  <DarkModeContainer class="h-full flex-center">
    <ASpace direction="vertical" align="center" :size="0">
      <ASpace>
        <a href="https://github.com/pup/react-admin" target="_blank" rel="noopener noreferrer">React Admin</a>
        <a href="https://github.com/pup/vva-pro" target="_blank" rel="noopener noreferrer">
          <SvgIcon icon="ri:github-fill" class="text-base" />
        </a>
        <a href="https://github.com/pup/vue2-admin" target="_blank" rel="noopener noreferrer">Vue2 Admin</a>
      </ASpace>
      <ASpace>
        Copyright MIT ©
        <a href="https://pup.com" target="_blank" rel="noopener noreferrer">狗蛋</a>
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">京ICP备0000号</a>
      </ASpace>
    </ASpace>
  </DarkModeContainer>
</template>

<style scoped></style>
