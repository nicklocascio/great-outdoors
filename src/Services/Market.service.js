import Parse from "parse";

// get all Market items
export const getAllMarket = () => {
    const Market = Parse.Object.extend("Market");
    const query = new Parse.Query(Market);
    return query.find().then((results) => {
        console.log(results);
        return results;
    });
};

// get specific Market item
export const getItemById = (id) => {
    const Market = Parse.Object.extend("Market");
    const query = new Parse.Query(Market);
    return query.get(id).then((result) => {
        console.log(result);
        return result;
    });
};

// create new Market item
export const createItem = (Item, Image, Model, Size, Gender, Level) => {

    const user = Parse.User.current();

    const Market = Parse.Object.extend("Market");
    const item = new Market();
    if(Image) {
        const imageFile = new Parse.File(Image.name, Image);
        item.set("image", imageFile);
    }
    console.log(Model);
    item.set("item", Item);
    item.set("model", Model);
    item.set("size", Size);
    item.set("gender", Gender);
    item.set("level", Level);
    item.set("user", user);
    return item.save().then((result) => {
        return result;
    });
};

// delete Market item - might not be necessary
export const removeItem = (id) => {
    const Lesson = Parse.Object.extend("Market");
    const query = new Parse.Query(Lesson);
    return query.get(id).then((result) => {
      return result.destroy();
    });
  };

export const getItemEmail = (id) => {
    return Parse.Cloud.run("getEmail", {"objectId":id})
        .then((updateSaved) => {
            return updateSaved;
        })
        .catch((error) => {
            alert( `getItemEmail Error: ${error.message}`);
        });

}