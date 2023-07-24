import ApiService from "../services/ApiService";

export default class AssociateService extends ApiService{
    constructor(){
        super('/contasacesso')
    }

    create(obj){
        return this.post(obj)
    }

    update(id,obj){
        return this.put(`/${id}`);
    }

    delete(id){
        return super.delete(`/${id}`)
    }
    
    findAll(){
        return this.get('');
    }
}