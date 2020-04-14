class BaseRepository{
    constructor(model){
        this.model = model;
    }

    async get(id){
        return await this.model.findById(id);
    }

    async getAll(pagesize = 5, pagenum = 1){
        //skip y limit
        const skips = pagesize * (pagenum -1);
        return await this.model.find().skip(skips).limit(pagesize);
    }

    async create(entity){
        return await this.model.create(entity);
    }

    async update(id, entity){
        return await this.model.findByIdAndUpdate(id, entity, {new: true});
    }

    async delete(id){
        await this.model.findByIdAndDelete(id);
        return true;
    }
}

module.exports = BaseRepository;