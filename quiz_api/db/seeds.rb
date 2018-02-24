require 'csv'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Answer.delete_all
Question.delete_all
Quiz.delete_all
User.delete_all
Result.delete_all

def create_question(row, quiz)
  Question.create({
    text: row['Question'],
    quiz_id: quiz.id
  })
end

def create_answer(row, index, question)
  Answer.create({
    text: row[index],
    points: row.headers[index].to_i,
    question_id: question.id
  })
end

quiz = Quiz.create({
  name: "Float Quiz"
})

CSV.foreach(Rails.root.join('db', 'data', 'quiz.csv'), :headers => true) do |row|
  question = create_question(row, quiz)
  num_of_columns = row.headers.length - 1
  for index in 1..num_of_columns do
    create_answer(row, index, question)
  end
end