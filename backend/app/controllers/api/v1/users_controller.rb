class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user
        else
            render json: { Error: "That user does not exist." }
        end
    end

    def create
        user = User.find_or_initialize_by(user_params)
        if user.save
            render json: user
        else
            render json: { Error: "There was an error saving the user." }
        end
    end

    private

    def user_params
        params.require(:user).permit(:name, :email)
    end
end