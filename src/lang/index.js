import langEn from './en'
import langTr from './tr'
import VueI18n from 'vue-i18n'



const languageMap = {
    en: langTr,
    tr: langEn
}

const i18n = new VueI18n({
    languageMap
})

export default i18n

