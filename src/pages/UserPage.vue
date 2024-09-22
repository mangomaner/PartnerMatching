<script setup lang="ts">
const user = {
  id: 1,
  username: '盲果人',
  userAccount: 'mangoman',
  avatarUrl: 'laoba.jpg',
  gender: 1,
  phone: '177397245',
  email: '114514@qq.com',
  userRole: 1,
  createTime: new Date(),
  userCode: '1145',
  tags: ['男','大三'],
}
</script>

<template>
  <van-cell title="用户名" is-link to="/user/edit" :value="user.username" />
  <van-cell title="账号" is-link to="/user/edit" :value="user.userAccount" />
  <van-cell title="头像" is-link to="/user/edit" :value="user.avatarUrl" >
    <img :src="user.avatarUrl" style="width: 50px; height: 50px;" />
  </van-cell>
  <van-cell title="性别" is-link to="/user/edit" :value="user.gender" />
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone" />
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" />
  <van-cell title="注册时间" is-link to="/user/edit" :value="user.createTime.toDateString()" />

</template>

<style scoped>

</style>