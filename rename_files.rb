files = Dir["out/assets/*body=1"]
files.each do |file_name|
	File.rename(file_name, file_name[0...-7])
end

files = Dir["out/assets/bootstrap/*body=1"]
files.each do |file_name|
	File.rename(file_name, file_name[0...-7])
end