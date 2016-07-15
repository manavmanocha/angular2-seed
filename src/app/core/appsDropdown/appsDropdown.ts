import {Component} from '@angular/core';
import {AppsData} from './appsData';

@Component({
    selector: 'apps-dropdown',
    template: require('./appsDropdown.html'),
    inputs: ['currentApp']
})

export class AppsDropdown {
    currentApp: string;
    apps = APPS;
}
const APPS: AppsData[] = [{
    'name': 'Textbooks',
    'img': '../../assets/images/Reader.png',
    'class': 'reader',
    'prodUrl': 'http://reader.comprodls.com',
    'isEnabled': 'true'
}, {
    'name': 'Courses',
    'img': '../../assets/images/Courseware.png',
    'class': 'courses',
    'prodUrl': 'http://courseware.comprodls.com',
    'isEnabled': 'is-enabled'
}, {
    'name': 'Tests',
    'img': '../../assets/images/Test.png',
    'class': 'tests',
    'prodUrl': '',
    'isEnabled': 'true'
}, {
    'name': 'Grades',
    'img': '../../assets/images/Grades.png',
    'class': 'grades',
    'prodUrl': 'http://grades.comprodls.com',
    'isEnabled': 'true'
}, {
    'name': 'Network',
    'img': '../../assets/images/Collaboration.png',
    'class': 'network',
    'prodUrl': 'http://network.comprodls.com',
    'isEnabled': 'true'
}, {
    'name': 'Suggestions',
    'img': '../../assets/images//Suggestions.png',
    'class': 'suggestions',
    'prodUrl': '',
    'isEnabled': 'true'
}];
