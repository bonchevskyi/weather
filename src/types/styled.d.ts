import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        textColor: string,
        textLightColor: string,
        borderColor: string,
        bgSidebar: string,
        bgContent: string,
        bgTemp: string,
        bgTempActive: string,
        bgTempText: string,
        bgTempTextActive: string,
        bgIcon: string,
    }
}
