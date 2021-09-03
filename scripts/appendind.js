// имитация Json файла, решил без отправки через php и без создания БД. Но я умею и так делать, просто без этого быстрее и понятнее. Но если надо, я могу объяснить как бы я сделал используя весь стэк.

//upd: Сказано создать компонент в задании, для этого идеально подошел бы React, но я решил сделать на чистом. Но если надо, я бы мог объяснить как бы я это сделал и на React'е.))
// Также тут надо прибраться и отрефакторить некоторые вещи(Глаза режут, я знаю))), если будет время, то я этим займусь.
const Skills = {

    0: {
        naming: "Unstoppable",
        type: "Survability",
        singularity: "Legendary",
        isSelect: "Selected",
        description: "Reduce engine repair time. At last mastery level gain reduced mobility with disabled engine.",
        options: {
            mastery: {
                naming: "mastery 1/4",
                progress: "25",
                description: "Engine repair time",
                value: "-2.5%",
            },
            mastery1: {
                naming: "UPGRADE ON LEGENDARY RANK 2",
                progress: "50",
                description: "Engine repair time",
                value: "-5%",
            }

        }
    },


    1: {
        naming: "Wito",
        type: "Strenght",
        singularity: "common",
        isSelect: "Unselected",
        description: "Reduce time to reload cannons and .",
        options: {
            mastery: {
                naming: "mastery 1/4",
                progress: "25",
                description: "Guns reload time",
                value: "-7.5%",
            },
            mastery1: {
                naming: "UPGRADE ON common RANK 2",
                progress: "50",
                description: "Guns reload time",
                value: "-10%",
            },
            mastery2: {
                naming: "UPGRADE ON common RANK 3",
                progress: "75",
                description: "Guns reload time",
                value: "-15%",
            }

        }
    },


    2: {
        naming: "WitoMax",
        type: "Strenght",
        singularity: "rare",
        isSelect: "selected",
        description: "Increase ammo capacity in the cannon when you being under attack.",
        options: {
            mastery: {
                naming: "mastery 1/4",
                progress: "25",
                description: "Size clip in the cannon",
                value: "-15%",
            },
            mastery1: {
                naming: "UPGRADE ON common RANK 2",
                progress: "50",
                description: "Size clip  in the cannon",
                value: "-17%",
            },
            mastery2: {
                naming: "UPGRADE ON common RANK 3",
                progress: "75",
                description: "Size clip  in the cannon",
                value: "-20%",
            },
            mastery3: {
                naming: "UPGRADE ON common RANK 4",
                progress: "100",
                description: "Size clip  in the cannon",
                value: "-25%",
            }

        }
    }

} 
appending(0)
actionListener()
function actionListener() {

    const skillNum = document.querySelectorAll(".skillChooser")
    skillNum.forEach(skill => {
        skill.addEventListener('click', function (event) {
            skillId = event.target.id
           
animationActivator(skillId);
        })
    });
}

function appending(skillId) {

    const imgBackSkillDiv = document.querySelectorAll(".Comander_skill_desc")[0];
    const imgSkillDiv = document.querySelectorAll(".img")[0];
    const nameSkillDiv = document.querySelectorAll(".Info_name")[0];
    const typeSkilDiv = document.querySelectorAll(".Info_type")[0];
    const singularitySkillDiv = document.querySelectorAll(".Info_singularity")[0];
    const imgStatusDiv = document.querySelectorAll(".Status_img")[0];
    const statusSkillDiv = document.querySelectorAll(".Status_info")[0];
    const descriptionSkillDiv = document.querySelectorAll(".Description_text")[0];

    console.log(imgSkillDiv, nameSkillDiv, typeSkilDiv, singularitySkillDiv, imgStatusDiv, statusSkillDiv, descriptionSkillDiv)
    console.log(Skills[0].naming)

    setText(nameSkillDiv, Skills[skillId].naming)
    setText(typeSkilDiv, Skills[skillId].type)
    setText(singularitySkillDiv, Skills[skillId].singularity + " skill")
    setText(statusSkillDiv, Skills[skillId].isSelect)
    setText(descriptionSkillDiv, Skills[skillId].description)
    setBackImg(imgBackSkillDiv, Skills[skillId].type)
    setImg(imgSkillDiv, Skills[skillId].type)
    setImg(imgStatusDiv, Skills[skillId].isSelect)

    setOptions(Skills[skillId])
}

function setOptions(skill) {
    const optionsDiv = document.getElementById("options");
    optionsDiv.textContent = "";
    console.log(skill.options)
    for (key in skill.options){
        console.log(skill.options[key])
        
        let optionData = skill.options[key]
        optionsDiv.innerHTML += setOneOption(optionData)
    }
  
    
    

}

//Из отого можно создать отдельно компонент самописный
function setOneOption(data) {
    
    const optionsPref = '<div class="Option"> ' +
        '<div class="Option_info"> ' +
        '<div class="Option_status_img">' +
            '<div class="part" style="background-image: conic-gradient(' +
            'rgb(255, 255, 255) ' +
            solveDifraction(data.progress) +
            ',#00000000 ' +
             '90deg' +
            ');"></div>' +
        '</div>' +
        '<div class="Option_name">' +
            data.naming +
        '</div>' +
'</div >' +
        '<div class="Option_desc" >' +
            '<div class="Desc" >' +
                data.description +
'</div >' +
        '<div class="separator" ></div >' +
            '<div class="Option_strenght" >' +
                data.value +
'</div >' +
'</div >' +
    '</div > ';
    
    return optionsPref
}

function solveDifraction(perCent){
    console.log(360/(100/perCent))
return 360/(100/perCent) + "deg"
}

function setImg(element, data) {
    element.style.backgroundImage = "url(/assets/icons/" + data + ".png)"
    
}

function setBackImg(element, data) {
    element.style.backgroundImage = "url(/assets/" + data + ".png)"
    
}

function setText(element, data) {
    element.textContent = data
}

function animationActivator(skillId){
const skillDescPane = document.getElementById("skillDescription")
skillDescPane.style.opacity = 0.8;
setTimeout(() => {
    appending(skillId)
    skillDescPane.style.opacity = 1;
}, 200);
}


