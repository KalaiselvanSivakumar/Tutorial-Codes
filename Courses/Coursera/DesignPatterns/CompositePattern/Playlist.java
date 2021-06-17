import java.util.List;

public class Playlist implements IComponent {
  public String playlistName;
	public List<IComponent> playlist = new ArrayList();
  public float speed = 1;

	public Playlist(String playlistName) {
		this.playlistName = playlistName;
	}

  @Override
  public void play() {
    System.out.println("Play song");
  }

  @Override
  public String getName() {
    return this.playlistName;
  }

  @Override
  public void setPlaybackSpeed(float speed) {
    this.speed = speed;
  }

  public void add(IComponent component) {
    playlist.add(component);
  }

  public void remove(IComponent component) {
    playlist.remove(component);
  }
}
