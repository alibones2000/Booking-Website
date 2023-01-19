class SessionsController < ApplicationController
    skip_before_action :check_user, only: :create

    def create 
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:passsword])
            session[:user_id] = user_id
            render json: user
        else
            render json: {error: "Email or password invalid"}
        end
end

def destroy
    session.delete :user_id
    render json: {message: "You are logged out"}
    end
end