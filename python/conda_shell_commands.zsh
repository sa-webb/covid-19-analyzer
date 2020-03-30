# List environments
conda info --envs

# Activate environment
conda activate <env_name>

# List environment packages
conda list

# Export environment details to YAML file.
conda env export > environment.yml

# Deactivate environment
deactivate <env_name>

# Execute file
python <file_name>