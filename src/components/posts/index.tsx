import Card from '../card';
import styles from './styles.module.scss';

export default function Posts() {
    var loren: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.'

    return (
        <div className={styles.container}>
            <div className={styles.favoriteGrid}>
                <img src="assets/post-1.png" alt="logo" />
                <div className={styles.cardOne}>
                    <Card title='Conheça as principais técnicas para conseguir uma vaga internacional em programação' isSimple={true} img={''} data='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.' />
                </div>
                <div className={styles.cardTwo}>
                    <Card title='Começando no ReactJS em 2022' isSimple={true} img={''} data='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. ' />
                </div>
                <div className={styles.cardThree}>
                    <Card title='Veja a evolução do Front-end na prática' isSimple={true} img={''} data='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.' />
                </div>
            </div>
            <div className={styles.cards}>
                <Card title='10 dicas para conseguir a vaga desejada' img={'/assets/post-1.png'} data={loren}/>
                <Card title='Deixe seu código mais semântico com essas dicas' img={'assets/post-2.png'} data='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.'/>
                <Card title='Use essas dicas nas suas aplicações mobile' img={'/assets/post-3.png'} data='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean LUCAS.'/>
                <Card img={'assets/post-4.png'} data='data fake'/>
                <Card img={'assets/post-1.png'} data='teste'/>
                <Card title='10 dicas para conseguir a vaga desejada' img={'/assets/post-1.png'} data={loren}/>
            </div>
        </div>
    )
}