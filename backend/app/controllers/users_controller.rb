class UsersController < ApplicationController

    get "/users/:id" do
        user = User.find(params[:id])
        user.to_json
    end

end