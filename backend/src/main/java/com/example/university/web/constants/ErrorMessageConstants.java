package com.example.university.web.constants;

public final class ErrorMessageConstants {

  public static final String ARGUMENT_NOT_VALID_ERROR_MESSAGE = "Argument not valid.";

  public static final String ARGUMENT_TYPE_MISMATCH_ERROR_MESSAGE = "Argument type mismatch.";

  public static final String ILLEGAL_ARGUMENT_ERROR_MESSAGE = "Illegal argument.";

  public static final String MESSAGE_NOT_READABLE_ERROR_MESSAGE = "Message Not Readable.";

  public static final String MEDIA_TYPE_NOT_SUPPORTED_ERROR_MESSAGE = "Media type not supported.";

  public static final String EXCEPTION_ERROR_MESSAGE = "Internal server error.";

  public static final String BAD_REQUEST_ERROR_MESSAGE = "Bad request.";

  public static final String RESOURCE_NOT_FOUND_ERROR_MESSAGE = "Resource not found.";

  public static final String USER_NOT_FOUND_ERROR_MESSAGE_FORMAT = "User with id %d not found.";

  public static final String USER_WITH_USERNAME_NOT_FOUND_ERROR_MESSAGE_FORMAT = "User with username %s not found.";

  public static final String BOARD_NOT_FOUND_ERROR_MESSAGE_FORMAT = "Board with id %d not found.";

  public static final String BOARD_WITH_NAME_NOT_FOUND_ERROR_MESSAGE_FORMAT = "Board with name %s not found.";

  public static final String BOARD_TYPE_NOT_FOUND_ERROR_MESSAGE_FORMAT = "Board type with id %d not found.";

  public static final String USER_BOARD_ROLE_NOT_FOUND_ERROR_MESSAGE_FORMAT = "User board role with user id %d not found.";

  public static final String BOARD_ROLE_NOT_FOUND_ERROR_MESSAGE_FORMAT = "Board role with id %d not found.";

  public static final String BOARD_ROLE_NOT_FOUND_BY_NAME_ERROR_MESSAGE_FORMAT = "Board role with name %s not found.";

  public static final String USER_IS_ALREADY_ON_BOARD_MESSAGE_FORMAT = "User %s is already on %s group!";

  public static final String USER_DOES_NOT_HAVE_STUDENT_ROLE = "User %s doesn't have student role!";

  public static final String ROLE_NOT_FOUND_ERROR_MESSAGE_FORMAT = "Role with id %d not found.";
  public static final String ROLE_WITH_NAME_NOT_FOUND_ERROR_MESSAGE_FORMAT = "Role with name %s not found.";

  public static final String ABSENCE_NOT_FOUND_ERROR_MESSAGE_FORMAT = "Absence with id %d not found.";
  public static final String ABSENCE_REASON_NOT_FOUND_ERROR_MESSAGE_FORMAT = "Absence reason with id %d not found.";
  public static final String NOT_PERMISSION_FOR_CUD_ABSENCE_ERROR_MESSAGE_FORMAT = "User with id %d can't %s absence for user with id %d.";
  public static final String NOT_PERMISSION_TO_SEE_BOARD_ERROR_MESSAGE = "You are not allowed to see one or more boards in your request because you are not member.";
  public static final String CREATE_OPERATION_MESSAGE = "create";
  public static final String UPDATE_OPERATION_MESSAGE = "update";
  public static final String DELETE_OPERATION_MESSAGE = "delete";
  public static final String DATE_RANGE_NOT_VALID = "Date range is not valid.";
  public static final String ABSENCE_ALREADY_EXIST_MESSAGE_FORMAT = "Absence for user %s already exist in that period.";
  public static final String FORBIDDEN_EXCEPTION = "You don't have permission";
  public static final String DAILY_LIMIT_FORMAT = "User %s can't create multiple partial absences that in total are longer than 8 hours!";
  public static final String NOT_EXIST_IN_DATABASE_FORMAT = "There is not %s in database!";
  public static final String BOARD_WITH_NAME_ALREADY_EXIST_FORMAT = "There is already board with %s name!";
  public static final String INVITE_CODE_IS_NOT_VALIDE = "Invite code is not valid";

  private ErrorMessageConstants() {
  }
}
