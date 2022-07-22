"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[16405],{16405:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-multi-select-example-7',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMultiSelectExample7 {\n    value: readonly string[] = [];\n\n    readonly countries = [\n        'Afghanistan',\n        'Albania',\n        'Algeria',\n        'American Samoa',\n        'Andorra',\n        'Angola',\n        'Anguilla',\n        'Antarctica',\n        'Antigua and Barbuda',\n        'Argentina',\n        'Armenia',\n        'Aruba',\n        'Australia',\n        'Austria',\n        'Azerbaijan',\n        'Bahamas',\n        'Bahrain',\n        'Bangladesh',\n        'Barbados',\n        'Belarus',\n        'Belgium',\n        'Belize',\n        'Benin',\n        'Bermuda',\n        'Bhutan',\n        'Bolivia',\n        'Bonaire, Sint Eustatius and Saba',\n        'Bosnia and Herzegovina',\n        'Botswana',\n        'Bouvet Island',\n        'Brazil',\n        'British Indian Ocean Territory',\n        'Brunei Darussalam',\n        'Bulgaria',\n        'Burkina Faso',\n        'Burundi',\n        'Cabo Verde',\n        'Cambodia',\n        'Cameroon',\n        'Canada',\n        'Cayman Islands',\n        'Central African Republic',\n        'Chad',\n        'Chile',\n        'China',\n        'Christmas Island',\n        'Cocos (Keeling) Islands',\n        'Colombia',\n        'Comoros',\n        'Congo',\n        'Cook Islands',\n        'Costa Rica',\n        'Croatia',\n        'Cuba',\n        'Cura\xe7ao',\n        'Cyprus',\n        'Czechia',\n        \"C\xf4te d'Ivoire\",\n        'Denmark',\n        'Djibouti',\n        'Dominica',\n        'Dominican Republic',\n        'Ecuador',\n        'Egypt',\n        'El Salvador',\n        'Equatorial Guinea',\n        'Eritrea',\n        'Estonia',\n        'Eswatini',\n        'Ethiopia',\n        'Falkland Islands',\n        'Faroe Islands',\n        'Fiji',\n        'Finland',\n        'France',\n        'French Guiana',\n        'French Polynesia',\n        'French Southern Territories',\n        'Gabon',\n        'Gambia',\n        'Georgia',\n        'Germany',\n        'Ghana',\n        'Gibraltar',\n        'Greece',\n        'Greenland',\n        'Grenada',\n        'Guadeloupe',\n        'Guam',\n        'Guatemala',\n        'Guernsey',\n        'Guinea',\n        'Guinea-Bissau',\n        'Guyana',\n        'Haiti',\n        'Heard Island and McDonald Islands',\n        'Holy See',\n        'Honduras',\n        'Hong Kong',\n        'Hungary',\n        'Iceland',\n        'India',\n        'Indonesia',\n        'Iran',\n        'Iraq',\n        'Ireland',\n        'Isle of Man',\n        'Israel',\n        'Italy',\n        'Jamaica',\n        'Japan',\n        'Jersey',\n        'Jordan',\n        'Kazakhstan',\n        'Kenya',\n        'Kiribati',\n        'Korea',\n        'Kuwait',\n        'Kyrgyzstan',\n        \"Lao People's Democratic Republic\",\n        'Latvia',\n        'Lebanon',\n        'Lesotho',\n        'Liberia',\n        'Libya',\n        'Liechtenstein',\n        'Lithuania',\n        'Luxembourg',\n        'Macao',\n        'Madagascar',\n        'Malawi',\n        'Malaysia',\n        'Maldives',\n        'Mali',\n        'Malta',\n        'Marshall Islands',\n        'Martinique',\n        'Mauritania',\n        'Mauritius',\n        'Mayotte',\n        'Mexico',\n        'Micronesia',\n        'Moldova',\n        'Monaco',\n        'Mongolia',\n        'Montenegro',\n        'Montserrat',\n        'Morocco',\n        'Mozambique',\n        'Myanmar',\n        'Namibia',\n        'Nauru',\n        'Nepal',\n        'Netherlands',\n        'New Caledonia',\n        'New Zealand',\n        'Nicaragua',\n        'Niger',\n        'Nigeria',\n        'Niue',\n        'Norfolk Island',\n        'Northern Mariana Islands',\n        'Norway',\n        'Oman',\n        'Pakistan',\n        'Palau',\n        'Palestine, State of',\n        'Panama',\n        'Papua New Guinea',\n        'Paraguay',\n        'Peru',\n        'Philippines',\n        'Pitcairn',\n        'Poland',\n        'Portugal',\n        'Puerto Rico',\n        'Qatar',\n        'Republic of North Macedonia',\n        'Romania',\n        'Russian Federation',\n        'Rwanda',\n        'R\xe9union',\n        'Saint Barth\xe9lemy',\n        'Saint Helena',\n        'Saint Kitts and Nevis',\n        'Saint Lucia',\n        'Saint Martin',\n        'Saint Pierre and Miquelon',\n        'Saint Vincent and the Grenadines',\n        'Samoa',\n        'San Marino',\n        'Sao Tome and Principe',\n        'Saudi Arabia',\n        'Senegal',\n        'Serbia',\n        'Seychelles',\n        'Sierra Leone',\n        'Singapore',\n        'Sint Maarten (Dutch part)',\n        'Slovakia',\n        'Slovenia',\n        'Solomon Islands',\n        'Somalia',\n        'South Africa',\n        'South Georgia',\n        'South Sudan',\n        'Spain',\n        'Sri Lanka',\n        'Sudan',\n        'Suriname',\n        'Svalbard and Jan Mayen',\n        'Sweden',\n        'Switzerland',\n        'Syrian Arab Republic',\n        'Taiwan',\n        'Tajikistan',\n        'Tanzania, United Republic of',\n        'Thailand',\n        'Timor-Leste',\n        'Togo',\n        'Tokelau',\n        'Tonga',\n        'Trinidad and Tobago',\n        'Tunisia',\n        'Turkey',\n        'Turkmenistan',\n        'Turks and Caicos Islands',\n        'Tuvalu',\n        'Uganda',\n        'Ukraine',\n        'United Arab Emirates',\n        'United Kingdom',\n        'United States of America',\n        'Uruguay',\n        'Uzbekistan',\n        'Vanuatu',\n        'Venezuela',\n        'Viet Nam',\n        'Virgin Islands (British)',\n        'Virgin Islands (U.S.)',\n        'Wallis and Futuna',\n        'Western Sahara',\n        'Yemen',\n        'Zambia',\n        'Zimbabwe',\n        '\xc5land Islands',\n    ];\n\n    get content(): string {\n        return `Selected ${this.value.length} of ${this.countries.length}`;\n    }\n}\n"}}]);