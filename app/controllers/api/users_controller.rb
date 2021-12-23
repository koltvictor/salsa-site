class Api::UsersController < ApplicationController
    # skip_before_action :has_secure_password


    def create 
        @new_user = User.create!(user_params)
        session[:user_id] = @new_user.id
        render json: @new_user,
        status: :created
    end 

    private

    def user_params
        params.permit(:email)
    end
end
