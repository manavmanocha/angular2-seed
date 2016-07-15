import {Component} from '@angular/core';
import {LanguageData} from './languageData'

@Component({
    selector: 'language-selector',
    template: require('./languageSelector.html'),
})

export class LanguageSelector {
    languages: any;
    currentLanguage: any;
    constructor(language: LanguageData) {
        this.languages = language.getLanguages();
        this.currentLanguage = this.languages[0];
    }
    selectLanguage(language) {
        this.currentLanguage = language;
    }

}


