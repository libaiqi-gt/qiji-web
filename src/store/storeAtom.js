import { atom } from 'recoil'

export const userInfoAtom = atom({
    key: 'userInfo',
    default: {},
});

export const loadingAtom = atom({
    key: 'isLoading',
    default: false
})