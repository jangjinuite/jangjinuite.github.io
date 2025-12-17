# Auto-update post dates based on file modification time
# Also tracks creation time for proper sorting
Jekyll::Hooks.register :posts, :post_init do |post|
  # Get file times
  file_path = post.path
  file_mtime = File.mtime(file_path)  # Last modified time
  file_ctime = File.birthtime(file_path) rescue File.ctime(file_path)  # Creation time (birthtime on Windows, ctime fallback)
  
  # Set the post date to last modified time (for display and sorting)
  post.data['date'] = file_mtime
  
  # Also set last_modified_at for reference
  post.data['last_modified_at'] = file_mtime
  
  # Set created_at for tracking original creation
  post.data['created_at'] = file_ctime
end
