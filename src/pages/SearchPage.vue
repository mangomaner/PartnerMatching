<script setup lang="ts">
import { ref } from 'vue';

const searchText = ref('');
const onSearch = () => {
  tagList.value = originalTagList.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value));
    if(tempParentTag.children.length === 0){
      return null;
    }
    return tempParentTag;
  }).filter(tag => tag !== null);
}

//移除标签
const close = (tag:string) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  });
};


const activeIds = ref([]);
const activeIndex = ref(0);

const originalTagList = [{
    text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id: '女' },
    ],
  },
  {
    text: '阶段',
    children: [
      { text: '大一', id: '大一' },
      { text: '大二', id: '大二' },
      { text: '大三', id: '大三' },
      { text: '大四', id: '大四' },
      { text: '研究生', id: '研究生' },
      { text: '工作', id: '工作' },
    ],
  },
];
let tagList = ref(originalTagList);

</script>

<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @update:model-value="onSearch"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeIds.length === 0" style="color: #636363;margin-left: 2vh;">请选择标签</div>
  <van-row gutter="20" style="margin-left: 15px;">
    <van-col v-for="tag in activeIds" style="padding: 5px;">
      <van-tag closeable size="large" type="primary" @close="close(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>


  <van-divider content-position="left">选择标签</van-divider>

  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />


</template>

<style scoped>

</style>