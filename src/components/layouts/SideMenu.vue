<script lang="ts" setup>
import { reactive, ref, watch, VueElement, h } from 'vue'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
import type { MenuProps, ItemType } from 'ant-design-vue'
import { useRouter } from 'vue-router'

const selectedKeys = ref<string[]>(['1'])
const openKeys = ref<string[]>(['kakaoMap'])
const router = useRouter()

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: 'group'
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type
  } as ItemType
}

const items: ItemType[] = reactive([
  getItem('KakaoMap', 'kakaoMap', () => h(MailOutlined), [
    getItem('지도 생성하기', '/basicMap'),
    getItem('지도 이동시키기', 'g2')
  ]),

  getItem('KakaoMapCustomOverlay', 'sub2', () => h(AppstoreOutlined), [
    getItem('커스텀 오버레이 생성하기', '5'),
    getItem('커스텀 오버레이 생성하기2', '6')
  ]),

  { type: 'divider' },

  getItem('Navigation Three', 'sub4', () => h(SettingOutlined), [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ]),

  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group')
])

const handleClick: MenuProps['onClick'] = (e) => {
  router.push('' + e.key)
}

watch(openKeys, (val) => {
  console.log('openKeys', val)
})
</script>
<template>
  <a-menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="inline"
    :items="items"
    @click="handleClick"
  ></a-menu>
</template>
