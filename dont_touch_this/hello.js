class Hello {

    constructor(text){
        this.text = text;
    }

    create_html(){
        return $('<h1>')
        .text(this.text);
    } 
    
    render(){
        let $element = this.create_html();
    }
    
    mount(parent){
        this.$element = this.create_html();
        $(parent).append(this.$element);
    }
}