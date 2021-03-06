import React, { useEffect, useState } from 'react';
import AboutUsProfilesSlider from './Profile/AboutUsProfilesSlider';
import traczyk from '../../assets/traczyk.JPG';
import dianka from '../../assets/diana.jpg';
import bartek from '../../assets/bartek.jpg';
import anastasia from '../../assets/anastasia.jpg';
import AboutUsProfileTiles from './Profile/AboutUsProfileTiles';

const AboutUsProfiles = () => {
    const authors = [
        {
            name: "Diana Kolopenyuk",
            icons: [
                {
                    type: 'instagram',
                    link: 'https://www.instagram.com/dianakllp/'
                },
                {
                    type: 'facebook',
                    link: 'https://www.facebook.com/profile.php?id=100005092291303'
                }
            ],
            description: 'I come from Ukraine but have lived in Warsaw for 5 years, where I graduated from university and now work. When Russia attacked Ukraine, I was terrified. Many of my relatives lost their jobs and any sense of stability within a few days. It was their stories that inspired me to help Ukrainian businesses that have to survive this difficult time somehow. That is how this project was born.',
            image: dianka
        },
        {
            name: "Łukasz Traczyk",
            icons: [
                {
                    type: 'facebook',
                    link: 'https://www.facebook.com/Trutch.1/'
                },
                {
                    type: 'github',
                    link: 'https://github.com/Trutch70'
                }
            ],
            description: 'I have been living in Warsaw ever since I was born. I am working as a software developer. But, some people don’t have it as nice as I do. Some people need to fight to survive, fight for their freedom. Ever since the war started, I have been helping as I can. I believe this project can help equalize the chances for Ukrainian businesses, which are at the threat of failure.',
            image: traczyk
        },
        {
            name: "Anastasia Alimova",
            icons: [
                {
                    type: 'instagram',
                    link: 'https://www.instagram.com/aalimmkaa/'
                },
                {
                    type: 'behance',
                    link: 'https://www.behance.net/alimovanasb89a'
                }
            ],
            description: 'I am from Mariupol, but I have lived and worked in Poland for 6 years. I’m working as a UX/UI designer, and when I was asked to join the team and create designs for the project, I did not think even for a moment. Seeing what is happening in Ukraine is unbearable, so I hope this project will help someone save and develop their businesses.',
            image: anastasia
        },
        {
            name: "Bartek Luzak",
            icons: [
                {
                    type: 'instagram',
                    link: 'https://www.instagram.com/glupiowyszlo'
                },
                {
                    type: 'facebook',
                    link: 'https://www.facebook.com/bartlomiejluzak'
                }
            ],
            description: 'I live in Łódź, Poland, where I work as a content creator. I have no influence on the Russian invasion, but any kind of support for Ukraine allows us to escape helplessness, even for a moment. The idea for Back on Track is brilliant in its simplicity. Just buy something nice from people who are trying to save their businesses when bombs fly over their heads.',
            image: bartek
        },
    ];

    const [mobile, setMobile] = useState(true);

    useEffect(() => {
        const width = window.innerWidth;
        if (width > 759) {
            setMobile(false);
        }
    }, []);

    return (
        <>
            {mobile && <AboutUsProfilesSlider authors={authors}/>}
            {!mobile && <AboutUsProfileTiles  authors={authors}/>}
        </>
    );
};

export default AboutUsProfiles;
