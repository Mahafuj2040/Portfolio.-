const section = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelector('.active-btn');
            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }
            this.classList.add('active-btn');
        });
    }

    //sections Active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        console.log(id);
        
        if(id){
            //remove selected  from the other buttons
            sectBtn.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
           
            //hide other section
            section.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            console.log(element);
            
            element.classList.add('active');
            console.log(`element before: ${element}`);
            
        }      

    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ( ) =>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
    
}

PageTransitions();
