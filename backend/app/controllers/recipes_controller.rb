class RecipesController < ApplicationController

    # READ all recipes
    get "/recipes" do
        recipes = Recipe.all
        recipes.to_json(include: [:kisses, :comments, :messes])
    end

    # finding recipe by id to UPDATE and DELETE
    get "/recipes/:id" do
        recipe = Recipe.find(params[:id])
        recipe.to_json(include: [:kisses, :comments, :messes])
    end

    # finding recipe by id and including comments to CREATE and READ
    get "/recipes/:id/comments" do
        recipe = Recipe.find(params[:id])
        recipe.to_json(include: :comments)
    end

    # finding recipe by id and including kisses to CREATE and READ and DELETE
    get "/recipes/:id/kisses" do
        recipe = Recipe.find(params[:id])
        recipe.to_json(include: :kisses)
    end

    get "/recipes/:id/kiss_count" do
        recipe = Recipe.find(params[:id])
        recipe.kiss_count.to_json
    end

    # finding recipe by id and including messes to CREATE and READ and DELETE
    get "/recipes/:id/messes" do
        recipe = Recipe.find(params[:id])
        recipe.to_json(include: :messes)
    end

    # CREATE: post for creating new recipe
    # post "/recipes" do
    #     recipe = Recipe.create(params)
    #     recipe.to_json(include: [:kisses, :comments, :messes])
    # end

    # UPDATE: patch for updating recipe
    patch "/recipes/:id" do
        recipe = Recipe.find(params[:id])
        recipe.update(params)
        recipe.to_json(include: [:kisses, :comments, :messes])
    end

    # # DELETE recipe by id
    delete "/recipes/:id" do
        recipe = Recipe.find(params[:id])
        recipe.destroy
        recipe.to_json
    end

    # post request for new recipe form 
    post '/recipes' do 
        Recipe.create(
            title: params[:title], 
            image_URL: params[:image_URL], 
            ingredients: params[:ingredients],
            steps: params[:steps], 
            cuisine: params[:cuisine], 
            time: params[:time], 
            difficulty: params[:difficulty], 
            user_id: params[:user_id]
        ).to_json(include: [:kisses, :comments, :messes])
    end
end