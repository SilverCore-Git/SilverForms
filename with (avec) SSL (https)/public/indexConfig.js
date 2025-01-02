/**
 * 
 * @license CC-LC 1.0
 * @author SivlerCore
 * @author SilverForms 
 * @author MisterPapaye
 * 
**/


// ――――――――――――――――――――――――――――――――――――――― { MAIN CONFIG } ―――――――――――――――――――――――――――――――――――――――

    const page = true   // allowed or not the page
    const title = 'SilverForms | page title';   // title of the page
    const bodytitle = 'SilverForms | Form';    // title of the form

// ――――――――――――――――――――――――――――――――――――――― { MAIN CONFIG } ―――――――――――――――――――――――――――――――――――――――



// ――――――――――――――――――――――――――――――――――――――― { ZONE CONFIG } ―――――――――――――――――――――――――――――――――――――――

    // ――――――――――――――――――――――――――――― { ZONE 1 } ―――――――――――――――――――――――――――――
        const zone1 = true    // allowed or not zone ? (alloweb = true | dont allowed = false) 

            const label1 = true    // allowed or not zone label ?
                const zone1Label = 'SilverForms | zone1Label';    // label name

            const text1 = true    // allowed or not zone text ?
                const inputzone1 = 'SilverForms | zone1';    // placeholder zone

            const btnz1 = true    // allowed or not zone btn ?
                const btnzone1 = 'SilverForms | btnzone1';    // btn name

    // ――――――――――――――――――――――――――――― { ZONE 2 } ―――――――――――――――――――――――――――――
        const zone2 = true    // allowed or not zone ? (alloweb = true | dont allowed = false) 

            const label2 = true    // allowed or not zone label ?
                const zone2Label = 'SilverForms | zone2Label';    // label name

            const text2 = true    // allowed or not zone text ?
                const inputzone2 = 'SilverForms | zone2';    // placeholder zone

            const btnz2 = true    // allowed or not zone btn ?
                const btnzone2 = 'SilverForms | btnzone2';    // btn name

    // ――――――――――――――――――――――――――――― { ZONE 3 } ―――――――――――――――――――――――――――――
        const zone3 = true    // allowed or not zone ? (alloweb = true | dont allowed = false) 

            const label3 = true    // allowed or not zone label ?
                const zone3Label = 'SilverForms | zone3Label';    // label name

            const text3 = true    // allowed or not zone text ?
                const inputzone3 = 'SilverForms | zone3';    // placeholder zone

            const btnz3 = true    // allowed or not zone btn ?
                const btnzone3 = 'SilverForms | btnzone3';    // btn name

    // ――――――――――――――――――――――――――――― { ZONE 4 } ―――――――――――――――――――――――――――――
        const zone4 = true    // allowed or not zone ? (alloweb = true | dont allowed = false) 

            const label4 = true    // allowed or not zone label ?
                const zone4Label = 'SilverForms | zone4Label';    // label name

            const text4 = true    // allowed or not zone text ?
                const inputzone4 = 'SilverForms | zone4';    // placeholder zone

            const btnz4 = true    // allowed or not zone btn ?
                const btnzone4 = 'SilverForms | btnzone4';    // btn name

    // ――――――――――――――――――――――――――――― { ZONE 5 } ―――――――――――――――――――――――――――――
        const zone5 = true    // allowed or not zone ? (alloweb = true | dont allowed = false) 

            const label5 = true    // allowed or not zone label ?
                const zone5Label = 'SilverForms | zone5Label';    // label name

            const text5 = true    // allowed or not zone text ?
                const inputzone5 = 'SilverForms | zone5';    // placeholder zone

            const btnz5 = true    // allowed or not zone btn ?
                const btnzone5 = 'SilverForms | btnzone5';    // btn name
            
// ――――――――――――――――――――――――――――――――――――――― { ZONE CONFIG } ――――――――――――――――――――――――――――――――――――――――

// ――――――――――――――――――――――――――――――――――――――― { BTN CONFIG } ――――――――――――――――――――――――――――――――――――――――

    const btn1 = true    // allowed or not the buttun ?
        const submitmode1 = false    // the btn is on submit mode ?
    
    const btn2 = true    // allowed or not the buttun ?
        const submitmode2 = false    // the btn is on submit mode ?

    const btn3 = true    // allowed or not the buttun ?
        const submitmode3 = false    // the btn is on submit mode ?

// ――――――――――――――――――――――――――――――――――――――― { BTN CONFIG } ――――――――――――――――――――――――――――――――――――――――

export default {

    // MAIN CONFIG
    page,
    title,
    bodytitle,

    // ZONE CONFIG
    zone1,
        label1,
            zone1Label,
        text1,
            inputzone1,
        btnz1,
            btnzone1,

    zone2,
        label2,
            zone2Label,
        text2,
            inputzone2,
        btnz2,
            btnzone2,

    zone3,
        label3,
            zone3Label,
        text3,
            inputzone3,
        btnz3,
            btnzone3,

    zone4,
        label4,
            zone4Label,
        text4,
            inputzone4,
        btnz4,
            btnzone4,

    zone5,
        label5,
            zone5Label,
        text5,
            inputzone5,
        btnz5,
            btnzone5,

    // BTN ZONE
    btn1,
        submitmode1,
    btn2,
        submitmode2,
    btn3,
        submitmode3,
    
}