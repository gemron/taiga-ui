"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[32456],{32456:(s,n,e)=>{e.r(n),e.d(n,{default:()=>t});const t="import {Component, ViewChild} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {assets} from '@demo/utils';\nimport {TuiCurrency} from '@taiga-ui/addon-commerce';\nimport {TUI_DEFAULT_MATCHER, tuiReplayedValueChangesFrom} from '@taiga-ui/cdk';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {map} from 'rxjs/operators';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n        readonly avatarUrl: string | null = null,\n        readonly accounts: Account[] = [],\n        readonly card: string = '',\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nclass Account {\n    constructor(\n        readonly id: string,\n        readonly name: string,\n        readonly amount: number,\n        readonly currency: TuiCurrency,\n        readonly cardSvg: string,\n    ) {}\n\n    toString(): string {\n        return this.name;\n    }\n}\n\nconst accountsRoman = [\n    new Account(\n        '1',\n        'RUB',\n        24876.55,\n        TuiCurrency.Ruble,\n        'https://ng-web-apis.github.io/dist/assets/images/common.svg',\n    ),\n    new Account(\n        '2',\n        'USD',\n        335,\n        TuiCurrency.Dollar,\n        'https://ng-web-apis.github.io/dist/assets/images/geolocation.svg',\n    ),\n];\nconst accountsAlex = [\n    new Account(\n        '3',\n        'EUR',\n        10000,\n        TuiCurrency.Euro,\n        'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg',\n    ),\n    new Account(\n        '4',\n        'PND',\n        100,\n        TuiCurrency.Pound,\n        'https://ng-web-apis.github.io/dist/assets/images/payment-request.svg',\n    ),\n];\nconst USERS = [\n    new User('Roman', 'Sedov', 'http://marsibarsi.me/images/1x1small.jpg', accountsRoman),\n    new User(\n        'Alex',\n        'Inkin',\n        assets`/images/avatar.jpg`,\n        accountsAlex,\n        '1234123412341234',\n    ),\n    new User('Dmitriy', 'Demenskiy'),\n    new User('Evgeniy', 'Mamaev'),\n    new User('Ivan', 'Ishmametiev'),\n    new User('Igor', 'Katsuba'),\n    new User('Yulia', 'Tsareva'),\n];\n\n@Component({\n    selector: 'tui-input-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputExample4 {\n    @ViewChild('avatar')\n    private readonly avatar: PolymorpheusContent = '';\n\n    private readonly user = new FormControl('');\n\n    readonly testForm = new FormGroup({\n        user: this.user,\n        account: new FormControl(''),\n        card: new FormControl(''),\n    });\n\n    lastUser: User | null = null;\n\n    readonly users$ = tuiReplayedValueChangesFrom<string>(this.user).pipe(\n        map(value => {\n            const filtered = USERS.filter(user => TUI_DEFAULT_MATCHER(user, value));\n\n            if (\n                filtered.length !== 1 ||\n                String(filtered[0]).toLowerCase() !== value.toLowerCase()\n            ) {\n                return filtered;\n            }\n\n            this.onSelected(filtered[0]);\n\n            return [];\n        }),\n    );\n\n    get card(): string | null {\n        const value = this.testForm.get('card')!.value;\n\n        if (value.length < 7) {\n            return null;\n        }\n\n        switch (value.charAt(0)) {\n            case '0':\n            case '1':\n            case '2':\n                return 'https://ng-web-apis.github.io/dist/assets/images/common.svg';\n            case '3':\n            case '4':\n            case '5':\n                return 'https://ng-web-apis.github.io/dist/assets/images/geolocation.svg';\n            case '6':\n            case '7':\n                return 'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg';\n            case '8':\n            case '9':\n            default:\n                return 'https://ng-web-apis.github.io/dist/assets/images/payment-request.svg';\n        }\n    }\n\n    get isUserSelected(): boolean {\n        return (\n            this.lastUser !== null &&\n            this.lastUser.toString().toLowerCase() ===\n                this.testForm.get('user')!.value.toLowerCase()\n        );\n    }\n\n    get content(): PolymorpheusContent {\n        return this.avatar && this.isUserSelected ? this.avatar : '';\n    }\n\n    get accounts(): Account[] {\n        return this.isUserSelected ? this.lastUser!.accounts : [];\n    }\n\n    onSelected(user: User): void {\n        this.lastUser = user;\n        this.testForm.get('card')!.setValue(user.card);\n    }\n}\n"}}]);