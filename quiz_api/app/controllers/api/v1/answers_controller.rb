module Api::V1
  class AnswersController < ApplicationController
    
    def index
      @answers = Answer.all
      render json: @answers
    end

  end
end 