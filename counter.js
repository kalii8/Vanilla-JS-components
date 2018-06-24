class Counter {

    constructor(){
        this.state = 0;
    }

    
    increment(){
        this.state = this.state + 1;
        this.render();

    }

    create_html(){
        return $('<div>')
        .addClass('counter')
        .text(this.state)
        .click(this.increment.bind(this))
    } 
    
    render(){
        let $new_element = this.create_html();
        this.$element.replaceWith($new_element);
        this.$element = $new_element;
    }
    
    mount(parent){
        this.$element = this.create_html();
        $(parent).append(this.$element);
    }
}