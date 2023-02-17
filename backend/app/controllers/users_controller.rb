class UsersController < ApplicationController

    # READ all users
    get "/users" do
        users = User.all
        users.to_json
    end

    # READ user by id
    get "/users/:id" do
        user = User.find(params[:id])
        user.to_json(include: [:kisses, :messes, recipes: {include: [:comments, :kisses, :messes]}])
    end

    # READ user by id WITH kisses
    get "/users/:id/kisses" do
        # user_kisses = Kiss.where(user_id: params[:id])
        # user_kisses.to_json(include: :recipe)
        user1 = User.find(params[:id])
        list = []
        kiss_arr = user1.kisses
        kiss_arr.map {| kiss |
            item = Recipe.find(kiss.recipe_id)
            list << item}
        list.to_json
    end

    # CREATE: post for creating new user
    post "/users" do
        user = User.create(
            user_name: params[:user_name],
            first_name: params[:first_name],
            last_name: params[:last_name],
            email: params[:email],
            password: params[:password],
            image_URL: params[:image_URL]
        )
        user.to_json(include: {recipes: {include: [:comments, :kisses, :messes]}})
    end

end