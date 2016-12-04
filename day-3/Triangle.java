
public class Triangle {
  private int side1, side2, side3;

  // delicious boilerplate
  public Triangle(int side1, int side2, int side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  public static Triangle fromLine(String textInput) {
    String[] split = textInput.trim().split("\\s+");
    return new Triangle(Integer.parseInt(split[0]), Integer.parseInt(split[1]), Integer.parseInt(split[2]));
  }

  public boolean isPossible() {
    return (side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2);
  }

  @Override
  public String toString() {
    return String.format("side 1: %d, side 2: %d, side 3: %d, is possible: %b", this.side1, this.side2, this.side3, this.isPossible());
  }
}
