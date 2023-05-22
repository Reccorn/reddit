import { createStore, Action, Thunk, action, thunk, createTypedHooks } from "easy-peasy";
import axios from 'axios';

export interface StoreModel {
    commentText: string;
    token: TokenState;
    me: MeState;
    getToken: Thunk<StoreModel, TokenState>;
    getTokenSuccess: Action<StoreModel, TokenState>;
    getTokenError: Action<StoreModel, TokenState>;
    meRequestStart: Action<StoreModel, MeState>;
    meRequest: Thunk<StoreModel, MeState>;
    meRequestSuccess: Action<StoreModel, MeState>;
    meRequestError: Action<StoreModel, MeState>;
    updateComment: Action<StoreModel, string>;
}

export type TokenState = {
    token: string;
    error?: string;
}

export type MeState = {
    loading: boolean;
    error: string;
    data: IUserData;
}

export interface IUserData {
    name?: string
    iconImg?: string
}

export const store = createStore<StoreModel>({
    token: {
        token: '',
        error: ''
    },
    me: {
        loading: false,
        error: '',
        data: {

        }
    },
    commentText: 'Пока!',
    getToken: thunk(async (actions, _payload) => {
        const token = localStorage.getItem('token') || window.__token__;

        if (token && token !== 'undefined') {
            localStorage.setItem('token', token);
            actions.getTokenSuccess({ token: token });
        } else {
            actions.getTokenError({ token: '', error: 'Токен не найден' });
        }
    }),
    getTokenSuccess: action((state, payload) => {
        state.token.token = payload.token;
    }),
    getTokenError: action((state, payload) => {
        state.token.token = payload.token;
        state.token.error = payload.error;
    }),
    meRequestStart: action((state, payload) => {
        state.me.loading = payload.loading;
    }),
    meRequest: thunk(async (actions, _payload) => {
        const token = useStoreState((state) => state.token.token);
        axios.get('https://oauth.reddit.com/api/v1/me.json', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((resp) => {
                const userData = resp.data;
                console.log(resp)
                actions.meRequestSuccess({
                    data: {
                        name: userData.name,
                        iconImg: userData.icon_img.split('?')[0]
                    },
                    loading: false,
                    error: ''
                });
            })
            .catch((error) => {
                console.log(error);
                actions.meRequestError({ error: error, loading: false, data: {} })
            });
    }),
    meRequestSuccess: action((state, payload) => {
        state.me.data = payload.data;
        state.me.loading = payload.loading;
        state.me.error = payload.error;
    }),
    meRequestError: action((state, payload) => {
        state.me.data = payload.data;
        state.me.loading = payload.loading;
        state.me.error = payload.error;
    }),
    updateComment: action((state, payload) => {
        state.commentText = payload;
    })
});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;