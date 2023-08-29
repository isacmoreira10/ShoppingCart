import 'styled-componentes'
import { DefaultThemes } from '../pages/menu/styles/themes/Default'

type ThemeType = typeof DefaultThemes

declare module 'styled-components' {
    export interface DefaultThemes extends ThemeType { }
}