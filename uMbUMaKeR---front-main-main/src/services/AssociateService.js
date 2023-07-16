import ApiService from "./ApiService";

export default class AssociateService extends ApiService{
    constructor(){
        super('/contasacesso')
    }

    creat(obj){
        return this.post('', obj)
    }

    update(id,obj){
        return this.put(`/${id}`, obj);
    }

    delete(id){
        return super.delete(`/${id}`)
    }
    
    find(params){
        return this.get(`${params}`);
    }
    
    findAll(){
        return this.getAll('/all');
    }
}