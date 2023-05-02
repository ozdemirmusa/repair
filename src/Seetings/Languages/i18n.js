import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
const locales = RNLocalize.getLocales();
console.log(locales[0].languageTag)
console.log(locales[0].languageCode)

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: {
        name: 'NAME',
        surname: 'SURNAME',
        phone: 'PHONE ',
        chassis_number: 'CHASSIS NUMBER',
        Meet: 'MEET',
        Location: 'LOCATION',
        Phone: 'PHONE',
        next: 'NEXT',
        cancel: 'CANCEL',
        previous: 'PREVIOUS',
        explanation: 'You can reach us at the phone number below or via whatsapp...',
        wp: 'WHATSAPP',
        address:'ADDRESS',
        fault1:'Body/Paint',
        fault2:'Mechanical',
        fault3:'Electric',
        fault4:'Brake/Air',
        fault5:'Heating/Cooling',
        fault6:'Accessory',
        word:'explanation',
        placeholder:'Please provide detailed information',
        send:'Send',
        toast:'Please Fill In The Required Fields',
      },
    },
    tr: {
      translation: {

        name: 'AD',
        surname: 'SOYAD',
        phone: 'TELEFON',
        chassis_number: 'ŞASE NO',
        meet: 'RANDEVU',
        location:'LOKASYON',
        next: 'SONRAKİ',
        cancel:'İPTAL',
        previous: 'ÖNCEKİ',
        explanation: 'Aşağıdaki telefon numarasından veya whatsapp üzerinden bize ulaşabilirsiniz...',
        wp: 'WHATSAPP',
        address:'ADRES',
        fault1:'Kaporta/Boya',
        fault2:'Mekanik',
        fault3:'Electrik',
        fault4:'Fren/hava',
        fault5:'Isıtma/Soğutma',
        fault6:'Aksesuar',
        word:'Açıklama',
        placeholder:'Lütfen detaylı bilgi veriniz',
        send:'gönder',
        toast:'Lütfen Gerekli Alanları Doldurunuz',
      },
    },
    fr: {
      translation: {
        hi: 'frrrrr',
      },
    },
  },
  lng: locales[0].languageCode,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
