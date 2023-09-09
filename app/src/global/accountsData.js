import IcoGithub from "@/assets/icons/accountsIco/github";
import IcoInstagram from "@/assets/icons/accountsIco/instagram";
import IcoLinkedin from "@/assets/icons/accountsIco/linkedin";
import IcoQuera from "@/assets/icons/accountsIco/quera";
import IcoTelegram from "@/assets/icons/accountsIco/telegram";

const accounts = [
    {
        id: 'erfanGharib',
        title: 'github',
        link: 'https://www.github.com/erfanGharib/',
        ico: <IcoGithub/>
    },
    {
        title: 'linkedin',
        link: 'https://www.linkedin.com/in/erfan-gharib-40b80b207/',
        ico: <IcoLinkedin/>
    },
    {
        id: 'erfan.igh',
        title: 'instagram',
        link: 'https://www.instagram.com/erfan.igh/',
        ico: <IcoInstagram/>
    },
    {
        title: 'quera',
        link: 'https://quera.org/profile/bwyvwf',
        ico: <IcoQuera/>
    },
    {
        id: 'ERFAN_Web_Dev',
        title: 'telegram',
        link: 'https://t.me/ERFAN_Web_Dev/',
        ico: <IcoTelegram/>
    },
];

export const contact = {
    phone: {
        title: '+98 930 678 3029',
        link: 'tel:09306783029'
    },
    email: {
        title: 'erfangharib5@gmail.com',
        link: 'mailto:erfangharib5@gmail.com'
    },
}

export default accounts;