import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "language": "Language",
      "help": "Help",
      "about": "About",
      "blog": "Blog",
      "faqs": "FAQs",
      "finuniqueGames": "Finunique Games"
    }
  },
  hi: {
    translation: {
      "language": "भाषा",
      "help": "सहायता",
      "about": "हमारे बारे में",
      "blog": "ब्लॉग",
      "faqs": "सामान्य प्रश्न",
      "finuniqueGames": "फिन्यूनिक गेम्स"
    }
  },
  gu: {
    translation: {
      "language": "ભાષા",
      "help": "મદદ",
      "about": "અમારા વિશે",
      "blog": "બ્લૉગ",
      "faqs": "પ્રશ્નો",
      "finuniqueGames": "ફિનયૂનિક ગેમ્સ"
    }
  },
  mr: {
    translation: {
      "language": "भाषा",
      "help": "मदत",
      "about": "आमच्याविषयी",
      "blog": "ब्लॉग",
      "faqs": "सामान्य प्रश्न",
      "finuniqueGames": "फिन्यूनिक गेम्स"
    }
  },
  bn: {
    translation: {
      "language": "ভাষা",
      "help": "সাহায্য",
      "about": "আমাদের সম্পর্কে",
      "blog": "ব্লগ",
      "faqs": "প্রশ্নাবলী",
      "finuniqueGames": "ফিনিউনিক গেমস"
    }
  },
  ta: {
    translation: {
      "language": "மொழி",
      "help": "உதவி",
      "about": "எங்களை பற்றி",
      "blog": "வலைப்பதிவு",
      "faqs": "கேள்விகள்",
      "finuniqueGames": "பின்யூனிக் விளையாட்டுகள்"
    }
  },
  te: {
    translation: {
      "language": "భాష",
      "help": "సహాయం",
      "about": "మా గురించి",
      "blog": "బ్లాగ్",
      "faqs": "ప్రశ్నలు",
      "finuniqueGames": "ఫిన్యూనిక్ గేమ్స్"
    }
  },
  kn: {
    translation: {
      "language": "ಭಾಷೆ",
      "help": "ಸಹಾಯ",
      "about": "ನಮ್ಮ ಬಗ್ಗೆ",
      "blog": "ಬ್ಲಾಗ್",
      "faqs": "ಪ್ರಶ್ನೆಗಳು",
      "finuniqueGames": "ಫಿನ್ಯೂನಿಕ್ ಗೇಮ್ಸ್"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
