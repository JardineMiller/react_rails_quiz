module Api::V1
  class QuizzesController < ApplicationController

    def index
      @quizzes = Quiz.all
      options = {
        include: {
          questions: {
            include: :answers
          }
        }
      }
      render json: @quizzes.as_json(options)
    end

    def show
      @quiz = Quiz.find(params[:id])
      options = {
        include: {
          questions: {
            include: :answers
          }
        }
      }
      render json: @quiz.as_json(options)
    end
    
  end
end