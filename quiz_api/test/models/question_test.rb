require 'test_helper'

class QuestionTest < ActiveSupport::TestCase

  test "Question belongs to a quiz" do
    assert_equal(questions(:one).quiz, quizzes(:one))
  end

  test "Question has text" do
    assert_equal(questions(:one).text, "This is a test question")
  end

  test "Question has answers" do
    assert_equal(questions(:one).answers.count, 2)
  end
end
