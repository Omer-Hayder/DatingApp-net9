﻿namespace API.Helpers
{
    public class UserParams
    {
        private int MaxPageSize = 50;

        public int PageNumber { get; set; }

        private int _pageSize = 10;

        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value;
        }

        public string? Gender { get; set; }
        public string? CurrentUsername { get; set; }
        public int MinAge { get; set; } = 18;
        public int MaxAge { get; set; } = 80;
        public string OrderBy { get; set; } = "lastActive";

    }
}
