package com.example.university.security.constants;

public final class EndpointConstants {

  public static final String SINGLE_PATH = "/*";
  public static final String ALL_PATHS = "/**";
  public static final String HEALTH_ENDPOINT = "/actuator/health";
  public static final String API_BOARD = "/boards";
  public static final String AUTHENTICATE = "/authenticate/**";
  public static final String API_ABSENCE = "/absences";

  private EndpointConstants() {
  }
}
