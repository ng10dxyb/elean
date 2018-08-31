
import { argv } from 'yargs'; //可以拿到npm run命令中的字段

// 环境：test|beta|prod，默认prod
export const envName = ['dev', 'test', 'beta', 'prod'].find(e => argv[e])

export const envConfig = {
    dev: {
        publicPath: '/'
    },
    test: {
        publicPath: '//www.yangboff.cn/'
    },
    beta: {
        publicPath: '//www.yangboff.cn/'
    },
    prod: {
        publicPath: '//www.yangboff.cn/'
    }
}[envName]
