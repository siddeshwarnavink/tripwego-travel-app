const PLACES = [
    {
        title: 'Kodaikanal',
        short_description: 'One of the very popular holiday destination hill resorts in South India',
        description: 'Kodaikanal is one of the very popular holiday destination hill resorts in South India. This hill station stands 7200 feet above sea level and situated in upper palani hills of the westernghats near Madurai in Tamil Nadu. Kodaikanal is also popularly known as the princes of Hill Stations.',
        address: 'Dindigul, Tamil Nadu, India',
        thumbnail: 'https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/main28.jpg&w=500&h=400',
        cover_picture: 'https://i.ytimg.com/vi/ltT6a7dM7RU/hq720.jpg',
        facilities: 'Travelling,Food,Hotel stay,Wifi connectivity',
        price: 50000,
        category: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        youtubeId: 'hDbjhxJL7Os',
        pictures: JSON.stringify([
            'https://economictimes.indiatimes.com/thumb/msid-58261473,width-1200,height-900,resizemode-4,imgsize-302482/discover-a-treasure-trove-of-natural-beauty-in-kodaikanal.jpg?from=mdr',
            'https://content.r9cdn.net/rimg/dimg/3e/6e/3d3419aa-city-44819-168bef7fb72.jpg?width=1200&height=630&crop=true',
            'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/a8/9f/7c.jpg'
        ]),
        locations: JSON.stringify([
            { caption: 'Kodaikanal Lake', thumbnail: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR21lbIimMhY2vCTj8BBDht9bZZgxNzRxlKPb8Je-m0Xt0MtO-JQH8hAaB8gJRTb08_OnyOi-CFJUX-GkkCDljmyw' },
            { caption: 'Coakers Walk', thumbnail: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcREbYKWZQApe6e8MKW00R6CLtwO2zpmrAZtuGou0lulU1IfbT1Y8kMaqj14C4kUgXmPHb054te_kvVepuOhSUkpQw' },
            { caption: 'Bryant Park', thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8B5JAqmxqefZth0m5V5-s_etkmWcoP5U1G2mS04-CR4hsFRgNx7gdNoW-RMHvSBcwk3nlbH9DsZSoK8hT7CNFUw' },
            { caption: 'Echo Point', thumbnail: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQpA4rx3vWOqSBLnXq7_3k94b7WnQC_IV-yTVFoQ6OjsXkvH_0jgC6qfo-f9eUbENCWxrnhwueAP7GzcB7lbusx4g' },
        ]),
        roadmap: JSON.stringify([
            { location: 'Hotel', time: '8:00am' },
            { location: 'Kodaikanal Lake', time: '10:00am' },
            { location: 'Bryant Park', time: '12:00am' },
            { location: 'Lunch', time: '1:00pm' },
            { location: 'Echo Point', time: '2:00pm' },
            { location: 'Hotel', time: '4:30pm' },
        ])
    },
    {
        title: 'Ooty',
        short_description: 'A resort town in the Western Ghats mountains, in southern India\'s Tamil Nadu state',
        description: 'Ooty (short for Udhagamandalam) is a resort town in the Western Ghats mountains, in southern India\'s Tamil Nadu state. Founded as a British Raj summer resort, it retains a working steam railway line. Other reminders of its colonial past include Stone House, a 19th-century residence, and the circa-1829 St. Stephen\’s Church. Its 55-acre Government Botanical Garden lies on the slopes of Doddabetta Peak.',
        address: 'Ooty, Tamil nadu',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Ooty_Town_Winter_Morning_from_Gem_Park_P1040150e.jpg',
        cover_picture: 'https://www.worldatlas.com/upload/ca/2f/40/shutterstock-1373319851.jpg',
        facilities: 'Travelling,Food,Hotel stay',
        price: 40000,
        category: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        youtubeId: '6K3lBAsNru0',
        pictures: JSON.stringify([
            'https://images.thrillophilia.com/image/upload/s--2Cu3wIBK--/c_fill,g_auto,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/013/739/original/5044002628_ef7f8b27af_b.jpg.jpg',
            'https://assets.gqindia.com/photos/62f67dd24c3aadbd8ac31c68/master/pass/Nilgiri-Mountain-Toy-Train.jpg',
            'https://static.india.com/wp-content/uploads/2018/10/Ooty.jpg?impolicy=Medium_Resize&w=1200&h=800'
        ]),
        locations: JSON.stringify([
            { caption: 'Ooty Boat House', thumbnail: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQzCuwkoQrBeiiDclDTwf4rQgZF2kVelERrN5XlZ1J6cMjHNXrkpH9LJX62GJpCGASSK5D0tGp5qRUXOav14tcjGA' },
            { caption: 'Botanical Garden', thumbnail: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRn23G32feq1CzA7MU8_b655oAdFUND_ZjDMLLZRs1lYIy2ldHOn58SfoJXX46EyS-Wsk4p-lKYavQn8uyu_izGBg' },
            { caption: 'Rose Garden', thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2Lrz_T1Jccx37RdtVqr2d-1JNyGOb4ZHzCJPjPDt4BKlPz_pSa2y8kFnoedNgOdC26OgrGFLphty8jlE6PiR3pQ' },
            { caption: 'Ooty Lake', thumbnail: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTsysovH1U7gpbfTd29-ulWi1Qd2aTh1mkz22UMl2ejC04SUQXFe6gxhPXz1oK8I3of1Si7UFg-FeZu_p2CKh2YLA' },
            { caption: 'Pine forest', thumbnail: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQdba_81r3Jn5jIB7bZ_GaPpQzNGT1A-WJRhprAh2tcxp0M7ojFwH6udXSL-MIhjRgmqadu8lOnJnp03ZSro364Jw' },
        ]),
        roadmap: JSON.stringify([
            { location: 'Hotel', time: '8:00am' },
            { location: 'Ooty Boat House', time: '10:30am' },
            { location: 'Botanical Garden', time: '12:30am' },
            { location: 'Lunch', time: '1:30pm' },
            { location: 'Rose Garden', time: '2:30pm' },
            { location: 'Ooty Lake', time: '3:30pm' },
            { location: 'Pine forest', time: '4:30pm' },
            { location: 'Hotel', time: '6:00pm' },
        ])
    },
    {
        title: 'Coimbatore',
        short_description: 'Coimbatore is a city in the south Indian state of Tamil Nadu.',
        description: 'Coimbatore is a city in the south Indian state of Tamil Nadu. To the northwest is the centuries-old, Dravidian-style Arulmigu Subramaniyaswami Temple, Marudamalai. The colorful and intricately carved Arulmigu Patteeswarar Swamy Temple lies southeast of here. In the center, the Gass Forest Museum has a huge collection of preserved animals and tree trunks. Southeast, birds and butterflies inhabit Singanallur Lake.',
        address: 'Coimbatore District, Tamil nadu',
        thumbnail: 'https://cdn.britannica.com/36/128436-050-DCCEEF90/Coimbatore-Tamil-Nadu-India.jpg',
        cover_picture: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Coimbatore.jpg',
        facilities: 'Travelling,Food',
        price: 15000,
        category: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        youtubeId: 'TYS1WgAVzJE',
        pictures: JSON.stringify([
            'https://cdn1.goibibo.com/voy_ing/t_fs/tamil-nadu-coimbatore-149343899978o.jpeg',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/01/4f/65/marudamalai-temple.jpg?w=600&h=400&s=1',
            'https://www.colive.com/blog/wp-content/uploads/2018/04/wdwd.jpg'
        ]),
        locations: JSON.stringify([
            { caption: 'Maha Shiva Adiyogi Statue', thumbnail: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQnZgCtAWKKKcj-SdL-w3GRDG3SpvBOhZQcX0c7JI4SYnh42ltZsa_Fd-7BO7-XTp2j6Fj0wyBP9jdRmX2_YzgIPw' },
            { caption: 'Marudhamalai Arulmigu Subramanya Swami Temple', thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuMvBXeAC-oBT3MEXQc63UJOrrfemdVMiN6w51DSmfAHGlHlikRRvYJ0i3iAk0ZkgaaPDuJZtjiqwmM89tIQC02g' },
            { caption: 'Arulmigu Eachanari Vinayagar Temple', thumbnail: 'https://lh5.googleusercontent.com/p/AF1QipNZ90I_EvPVTRkGW3S1kAxFfJQ_ODQFnJJUAGJz=w600-h650-p-k-no' },
        ]),
        roadmap: JSON.stringify([
            { location: 'Maha Shiva Adiyogi Statue', time: '8:00am' },
            { location: 'Marudhamalai Arulmigu Subramanya Swami Temple', time: '11:00am' },
            { location: 'Lunch', time: '1:30pm' },
            { location: 'Arulmigu Eachanari Vinayagar Temple', time: '2:30pm' },
        ])
    },
    {
        title: 'Madurai',
        short_description: 'Madurai is an energetic, ancient city on the Vaigai River in the South Indian state of Tamil Nadu',
        description: `Madurai is an energetic, ancient city on the Vaigai River in the South Indian state of Tamil Nadu. Its skyline is dominated by the 14 colorful gopurams (gateway towers) of Meenakshi Amman Temple. Covered in bright carvings of Hindu gods, the Dravidian-style temple is a major pilgrimage site. Millions attend the processions and ceremonies of April's Chithirai Festival celebrating Meenakshi and Lord Vishnu.`,
        address: 'Madurai, Tamil nadu',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/India_-_Madurai_temple_-_0781.jpg',
        cover_picture: 'https://i.ytimg.com/vi/bygqUbmPslE/maxresdefault.jpg',
        facilities: 'Travelling,Food',
        price: 20000,
        category: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        youtubeId: 'TYS1WgAVzJE',
        pictures: JSON.stringify([
            'https://www.aanmeegam.in/en/wp-content/uploads/2021/11/madurai-meenakshi-temple-gopuram.jpg',
            'https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/madurai-1654767285_369d2c83d497af27914b.webp',
        ]),
        locations: JSON.stringify([
            { caption: 'Meenakshi Temple', thumbnail: 'https://www.tourmyindia.com/states/tamilnadu/images/meenakshi-temple1-1.jpg' },
        ]),
        roadmap: JSON.stringify([
            { location: 'Meenakshi Temple', time: '10:00am' },
        ])
    },
    {
        title: 'Shimla',
        short_description: 'Shimla is the capital of the northern Indian state of Himachal Pradesh',
        description: `Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway, completed in 1903. It’s also known for the handicraft shops that line The Mall, a pedestrian avenue, as well as the Lakkar Bazaar, a market specializing in wooden toys and crafts.`,
        address: 'Shimla,Himachal Pradesh, India',
        thumbnail: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRTu7c6KdX4X7t-1Ryggxa0jPkeMzM7io74YdWEOHIl3AJAjcfxmMy9ovm7tq9wJsb4',
        cover_picture: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/292138307.jpg?k=eb10c5a84dec52a944c9724bef9aa37b772fcb6205a75bffb838ebf734c9176f&o=&hp=1',
        facilities: 'Travelling,Food,Hotel stay,Wifi connectivity',
        price: 70000,
        category: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        youtubeId: 'tBlc_eJzPD4',
        pictures: JSON.stringify([
            'https://toliday.in/blog/wp-content/uploads/2022/04/1588920518_shutterstock_1611108550.jpg.jpg'
        ]),
        locations: JSON.stringify([
            { caption: 'Kodaikanal Lake', thumbnail: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR21lbIimMhY2vCTj8BBDht9bZZgxNzRxlKPb8Je-m0Xt0MtO-JQH8hAaB8gJRTb08_OnyOi-CFJUX-GkkCDljmyw' },
            { caption: 'Coakers Walk', thumbnail: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcREbYKWZQApe6e8MKW00R6CLtwO2zpmrAZtuGou0lulU1IfbT1Y8kMaqj14C4kUgXmPHb054te_kvVepuOhSUkpQw' },
            { caption: 'Bryant Park', thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8B5JAqmxqefZth0m5V5-s_etkmWcoP5U1G2mS04-CR4hsFRgNx7gdNoW-RMHvSBcwk3nlbH9DsZSoK8hT7CNFUw' },
            { caption: 'Echo Point', thumbnail: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQpA4rx3vWOqSBLnXq7_3k94b7WnQC_IV-yTVFoQ6OjsXkvH_0jgC6qfo-f9eUbENCWxrnhwueAP7GzcB7lbusx4g' },
        ]),
        roadmap: JSON.stringify([
            { location: 'Hotel', time: '8:00am' },
            { location: 'Kodaikanal Lake', time: '10:00am' },
            { location: 'Bryant Park', time: '12:00am' },
            { location: 'Lunch', time: '1:00pm' },
            { location: 'Echo Point', time: '2:00pm' },
            { location: 'Hotel', time: '4:30pm' },
        ])
    },
];


module.exports = PLACES;