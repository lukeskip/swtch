class Swtch{
    constructor(container,labels,initial,update){
        this.container  = $(container);
        this.labels     = labels;
        this.slugs      = labels;
        this.initial    = initial;


        let swtch = $(` 
            <div class="swtch ${labels[0].icon ? 'rounded' : 'labelled'}">
                <div class="pointer"></div>
            </div>
        `);

        const labelsContainer = $('<div class="labels-container"></div>')
        this.labels.map((label,index)=>{
            let slug = label.slug;
            let labelContainer = `<div class="label label_${slug} ${index === 0 ? 'active':null}" data-slug="${slug}"><span data-color="${label.color}">${label.icon ? label.icon : label.label}</span></div>`
            labelsContainer.append(labelContainer);
           
        });


        this.container.on('click','.label >span',(e)=>{
            const label = $(e.currentTarget).closest('.label').data('slug');         
            this.moveTo(label);
        });
        
        swtch.append(labelsContainer);
        this.container.append(swtch);
        
        this.moveTo(this.initial); 

    }


    moveTo(label){
        this.beforeMove();
        const object = this.container.find(`.label_${label} span`);
        this.container.find('.label').removeClass('active');
        const newPosition = object.position().left+((object.parent().width()/2)-25);
        this.container.find('.pointer').css({'left':newPosition,'background-color':object.data('color')});
        this.value = object.closest('.label').data('slug');
        object.parent().addClass('active');
        this.value = label;
        if(!this.labels[0].icon){
            
            
            
        }
        this.afterMove();
    }

    afterMove(){}
    beforeMove(){}
 

    
    
    
}