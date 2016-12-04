// javac -g TriangleSolver.java Triangle.java && java TriangleSolver
// expected: 983

import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;
import java.util.stream.Stream;

public class TriangleSolver {

  public TriangleSolver() throws IOException {
    Path path = FileSystems.getDefault().getPath("input.txt");
    int possibleTriangles = Files.lines(path)
      .map(Triangle::fromLine)
      .reduce(0, (rest, triangle) -> triangle.isPossible() ? rest + 1 : rest, (sum1, sum2) -> sum1 + sum2);

    System.out.println("Possible triangles: " + possibleTriangles);
  }

  public static void main(String[] args) {
    try {
      new TriangleSolver();
    } catch (Exception e) {
      System.err.println(e.getMessage());
    }
  }
}
