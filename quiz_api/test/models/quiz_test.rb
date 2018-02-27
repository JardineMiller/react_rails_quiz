require 'test_helper'

class QuizTest < ActiveSupport::TestCase

 test "Quiz has a name" do
   assert_equal("Quiz 1", quizzes(:one).name)
 end

 test "Quiz has questions" do
  assert_equal(1, quizzes(:one).questions.count)
  assert_equal(1, quizzes(:two).questions.count)
 end

end